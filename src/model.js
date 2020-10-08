import image from './assets/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './clases/blocks'
const text = 'This app allows dynamically construct UI. Use sidebar to add elements with styles to the page.';
export const model = [
    new TitleBlock('Site Constructor on pure JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#ffffff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock(text,{
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock([
        'App in vanilla JavaScript without using any libraries',
        'Using SOLID principles and OOP in JavaScript',
        'JavaScript - easy, fun. Learning how to create UI pages'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
            'font-size': '0.9rem',
            'text-align': 'center',
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    })
]
