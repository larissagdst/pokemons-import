import * as XLSX from 'xlsx'
import { readFileSync } from 'fs'

export function readExcel(filePath: string): any[] {
    const fileBuffer = readFileSync(filePath)
    const workbook = XLSX.read(fileBuffer, {type: 'buffer'})

    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]

    const data = XLSX.utils.sheet_to_json(sheet)
    return data
}