import { FRC_API_USERNAME, FRC_API_AUTHORIZATION_KEY } from '$env/static/private';

const BASE_URL = 'https://frc-api.firstinspires.org';

interface FrcApiFetchParams {
	endpoint: string;
	queryParams?: Record<string, string>;
	eventYear?: number;
	eventAbbreviation?: string;
	apiVersion?: string;
}

interface ScheduleApiResponse {
	Schedule: Array<{
		matchNumber: number;
		teams: Array<{
			teamNumber: number;
		}>;
	}>;
}

export interface ScheduleResponse {
	matchNumber: number;
	red1: number;
	red2: number;
	red3: number;
	blue1: number;
	blue2: number;
	blue3: number;
}

const authorizationHeader = Buffer.from(
	`${FRC_API_USERNAME}:${FRC_API_AUTHORIZATION_KEY}`
).toString('base64');

const requestOptions: RequestInit = {
	method: 'GET',
	redirect: 'follow',
	headers: new Headers({
		Authorization: `Basic ${authorizationHeader}`,
		'If-Modified-Since': ''
	})
};

export default class FrcApi {
	private static async fetchFromFrcApi({
		endpoint,
		queryParams = {},
		eventYear = 2024,
		eventAbbreviation = 'BRBR',
		apiVersion = 'v3.0'
	}: FrcApiFetchParams): Promise<any> {
		const queryString = new URLSearchParams(queryParams).toString();
		// 'https://frc-api.firstinspires.org/v3.0/2020/schedule/ARLI?tournamentLevel=Playoff',
		const url = `${BASE_URL}/${apiVersion}/${eventYear}/${endpoint}/${eventAbbreviation}?${queryString}`;

		try {
			const response = await fetch(url, requestOptions);
			return await response.json();
		} catch (e: unknown) {
			console.error(`Error fetching from FRC API: ${(e as Error).message}`);
			throw e;
		}
	}

	public static async fetchSchedule(
		eventYear: number,
		eventAbbreviation: string,
		tournamentLevel: string
	): Promise<ScheduleResponse[]> {
		const response = await FrcApi.fetchFromFrcApi({
			endpoint: 'schedule',
			queryParams: { tournamentLevel },
			eventAbbreviation,
			eventYear
		});

		const schedule = (response as ScheduleApiResponse)?.Schedule?.map((entity) => {
			return {
				matchNumber: entity?.matchNumber,
				red1: entity?.teams[0]?.teamNumber,
				red2: entity?.teams[1]?.teamNumber,
				red3: entity?.teams[2]?.teamNumber,
				blue1: entity?.teams[3]?.teamNumber,
				blue2: entity?.teams[4]?.teamNumber,
				blue3: entity?.teams[5]?.teamNumber
			};
		});

		return schedule;
	}
}
