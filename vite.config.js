import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nanoid} from "nanoid";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/contact-form/',
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (name, filePath) => {
        const [, fileName] = filePath.split('/').reverse(); // достаем название файла
        return `${fileName}_${name}_${nanoid(4)}` // возвращаем НазваниеФайла_класс_хэшик
      },
    }
  }

})