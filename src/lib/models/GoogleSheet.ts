import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

import { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } from '$env/static/private';

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
	email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
	key: GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
	scopes: [
		'https://www.googleapis.com/auth/spreadsheets',
		'https://www.googleapis.com/auth/drive.file'
	]
});

export default class GoogleSheet {
	private constructor(
		private doc: GoogleSpreadsheet,
		private sheet: GoogleSpreadsheetWorksheet
	) {}

	public static create = async (sheetId: string, sheetTitle: string) => {
		try {
			const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
			await doc.loadInfo();
			const sheet = doc.sheetsByTitle[sheetTitle];

			return new GoogleSheet(doc, sheet);
		} catch (e: unknown) {
			throw new Error(`Error on Google Sheets: ${(e as Error).message}`);
		}
	};

	public async addRow(data: any) {
		try {
			await this.sheet.addRow(data);
		} catch (e: unknown) {
			throw new Error(`Error adding row to Google Sheets: ${(e as Error).message}`);
		}
	}
}
