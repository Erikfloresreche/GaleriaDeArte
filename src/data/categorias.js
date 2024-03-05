import data from './photos';
const {fotos} = data;


export default {
	categorias: [
		{ id: 'Claude_Monet', nombre: 'ClaudeMonet', numeroFotos: fotos['Claude_Monet'].length, imagenPortada: './img/Claude-Monet.jpg' },
		{ id: 'Edvard_Munch', nombre: 'EdvardMunch', numeroFotos: fotos['Edvard_Munch'].length, imagenPortada: './img/Edvard-Munch.jpg' },
		{ id: 'Frida_Kahlo', nombre: 'FridaKahlo', numeroFotos: fotos['Frida_Kahlo'].length, imagenPortada: './img/Frida-Kahlo.jpg' },
		{ id: 'Leonardo_da_Vinci', nombre: 'LeonardoDaVinci', numeroFotos: fotos['Leonardo_da_Vinci'].length, imagenPortada: './img/Leonardo-da-Vinci.jpg' },
		{ id: 'Buonarroti', nombre: 'Buonarroti', numeroFotos: fotos['Buonarroti'].length, imagenPortada: './img/Buonarroti.jpg' },
		{id: 'Pablo_Picasso', nombre: 'PabloPicasso',numeroFotos: fotos['Pablo_Picasso'].length, imagenPortada: './img/Pablo-Picasso.jpg',},
		{id: 'Rembrandt', nombre: 'Rembrandt',numeroFotos: fotos['Rembrandt'].length, imagenPortada: './img/Rembrandt.jpg',},
		{id: 'Salvador_Dalí', nombre: 'SalvadorDalí',numeroFotos: fotos['Salvador_Dalí'].length, imagenPortada: './img/Salvador-Dalí.jpg',},
		{id: 'VanGogh', nombre: 'VanGogh',numeroFotos: fotos['VanGogh'].length, imagenPortada: './img/VanGogh.jpg',},
	],
};