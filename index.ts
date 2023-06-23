import axios from 'axios';
import dotenv from 'dotenv';
import { writeFile } from 'node:fs/promises';
import path from 'path';

dotenv.config();

const route = '/manga/mangakakalot/info?id=manga-aa951409'
const URL = `${process.env.BASE_URL}${route}`

async function main() {
  const response = await axios.get(URL);
  const data = response.data;
  const filePath = path.join(__dirname, 'data', 'one-piece-mangakakalot.json');
  await writeFile(filePath, JSON.stringify(data, null, 2));

  console.log(data.chapters.length);
}

main();
