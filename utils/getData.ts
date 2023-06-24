import axios from 'axios';
import dotenv from 'dotenv';
import { writeFile } from 'node:fs/promises';
import path from 'path';

dotenv.config();

const route = '/manga/mangakakalot/info?id=manga-aa951409'
const URL = `${process.env.BASE_URL}${route}`

export async function getData() {
  const response = await axios.get(URL);
  const data = response.data;

  return data;
};

