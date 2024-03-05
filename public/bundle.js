'use strict';

var datos = {
	fotos: {
		Claude_Monet: [
			{
				id: 1,
				nombre: 'ClaudeMonet 1',
				descripcion:
					'ClaudeMonet 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/1.jpg',
			},
			{
				id: 2,
				nombre: 'ClaudeMonet 2',
				descripcion:
					'ClaudeMonet 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/2.jpg',
			},
			{
				id: 3,
				nombre: 'ClaudeMonet 3',
				descripcion:
					'ClaudeMonet 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/3.jpg',
			},
			{
				id: 4,
				nombre: 'ClaudeMonet 4',
				descripcion:
					'ClaudeMonet 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/4.jpg',
			},
			{
				id: 5,
				nombre: 'ClaudeMonet 5',
				descripcion:
					'ClaudeMonet 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/5.jpg',
			},
			{
				id: 6,
				nombre: 'ClaudeMonet 6',
				descripcion:
					'ClaudeMonet 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/6.jpg',
			},
			{
				id: 7,
				nombre: 'ClaudeMonet 7',
				descripcion:
					'ClaudeMonet 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/7.jpg',
			},
			{
				id: 8,
				nombre: 'ClaudeMonet 8',
				descripcion:
					'ClaudeMonet 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/8.jpg',
			},
			{
				id: 9,
				nombre: 'ClaudeMonet 9',
				descripcion:
					'ClaudeMonet 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Claude_Monet/9.jpg',
			},
		],
		Edvard_Munch: [
			{
				id: 11,
				nombre: 'EdvardMunch 1',
				descripcion:
					'EdvardMunch 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/1.jpg',
			},
			{
				id: 12,
				nombre: 'EdvardMunch 2',
				descripcion:
					'EdvardMunch 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/2.jpg',
			},
			{
				id: 13,
				nombre: 'EdvardMunch 3',
				descripcion:
					'EdvardMunch 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/3.jpg',
			},
			{
				id: 14,
				nombre: 'EdvardMunch 4',
				descripcion:
					'EdvardMunch 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/4.jpg',
			},
			{
				id: 15,
				nombre: 'EdvardMunch 5',
				descripcion:
					'EdvardMunch 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/5.jpg',
			},
			{
				id: 16,
				nombre: 'EdvardMunch 6',
				descripcion:
					'EdvardMunch 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/6.jpg',
			},
			{
				id: 17,
				nombre: 'EdvardMunch 7',
				descripcion:
					'EdvardMunch 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/7.jpg',
			},
			{
				id: 18,
				nombre: 'EdvardMunch 8',
				descripcion:
					'EdvardMunch 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/8.jpg',
			},
			{
				id: 19,
				nombre: 'EdvardMunch 9',
				descripcion:
					'EdvardMunch 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/9.jpg',
			},
			{
				id: 20,
				nombre: 'EdvardMunch 10',
				descripcion:
					'EdvardMunch 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Edvard_Munch/10.jpg',
			},
		],

		Frida_Kahlo: [
			{
				id: 21,
				nombre: 'FridaKahlo 1',
				descripcion:
					'FridaKahlo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/1.jpg',
			},
			{
				id: 22,
				nombre: 'FridaKahlo 2',
				descripcion:
					'FridaKahlo 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/2.jpeg',
			},
			{
				id: 23,
				nombre: 'FridaKahlo 3',
				descripcion:
					'FridaKahlo 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/3.jpg',
			},
			{
				id: 24,
				nombre: 'FridaKahlo 4',
				descripcion:
					'FridaKahlo 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/4.jpg',
			},
			{
				id: 25,
				nombre: 'FridaKahlo 5',
				descripcion:
					'FridaKahlo 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/5.jpg',
			},
			{
				id: 26,
				nombre: 'FridaKahlo 6',
				descripcion:
					'FridaKahlo 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/6.jpeg',
			},
			{
				id: 27,
				nombre: 'FridaKahlo 7',
				descripcion:
					'FridaKahlo 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/7.jpg',
			},
			{
				id: 28,
				nombre: 'FridaKahlo 8',
				descripcion:
					'FridaKahlo 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Frida_Kahlo/8.jpg',
			},
		],
		Leonardo_da_Vinci: [
			{
				id: 31,
				nombre: 'LeonardoDaVinci 1',
				descripcion:
					'LeonardoDaVinci 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/1.jpg',
			},
			{
				id: 32,
				nombre: 'LeonardoDaVinci 2',
				descripcion:
					'LeonardoDaVinci 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/2.jpg',
			},
			{
				id: 33,
				nombre: 'LeonardoDaVinci 3',
				descripcion:
					'LeonardoDaVinci 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/3.jpg',
			},
			{
				id: 34,
				nombre: 'LeonardoDaVinci 4',
				descripcion:
					'LeonardoDaVinci 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/4.jpg',
			},
			{
				id: 35,
				nombre: 'LeonardoDaVinci 5',
				descripcion:
					'LeonardoDaVinci 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/5.jpg',
			},
			{
				id: 36,
				nombre: 'LeonardoDaVinci 6',
				descripcion:
					'LeonardoDaVinci 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/6.jpg',
			},
			{
				id: 37,
				nombre: 'LeonardoDaVinci 7',
				descripcion:
					'LeonardoDaVinci 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/7.jpg',
			},
			{
				id: 38,
				nombre: 'LeonardoDaVinci 8',
				descripcion:
					'LeonardoDaVinci 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/8.jpg',
			},
			{
				id: 39,
				nombre: 'LeonardoDaVinci 9',
				descripcion:
					'LeonardoDaVinci 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/9.jpg',
			},
			{
				id: 40,
				nombre: 'LeonardoDaVinci 10',
				descripcion:
					'LeonardoDaVinci 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Leonardo_da_Vinci/10.jpg',
			},
		],
		Buonarroti: [
			{
				id: 41,
				nombre: 'Buonarroti 1',
				descripcion:
					'Buonarroti 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/1.jpg',
			},
			{
				id: 42,
				nombre: 'Buonarroti 2',
				descripcion:
					'Buonarroti 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/2.jpg',
			},
			{
				id: 43,
				nombre: 'Buonarroti 3',
				descripcion:
					'Buonarroti 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/3.jpg',
			},
			{
				id: 44,
				nombre: 'Buonarroti 4',
				descripcion:
					'Buonarroti 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/4.jpg',
			},
			{
				id: 45,
				nombre: 'Buonarroti 5',
				descripcion:
					'Buonarroti 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/5.jpg',
			},
			{
				id: 46,
				nombre: 'Buonarroti 6',
				descripcion:
					'Buonarroti 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/6.jpg',
			},
			{
				id: 47,
				nombre: 'Buonarroti 7',
				descripcion:
					'Buonarroti 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/7.jpg',
			},
			{
				id: 48,
				nombre: 'Buonarroti 8',
				descripcion:
					'Buonarroti 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/8.jpg',
			},
			{
				id: 49,
				nombre: 'Buonarroti 9',
				descripcion:
					'Buonarroti 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/9.jpg',
			},
			{
				id: 50,
				nombre: 'Buonarroti 10',
				descripcion:
					'Buonarroti 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Buonarroti/10.jpg',
			},
		],
		Pablo_Picasso: [
			{
				id: 51,
				nombre: 'PabloPicasso 1',
				descripcion:
					'PabloPicasso 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/1.jpg',
			},
			{
				id: 52,
				nombre: 'PabloPicasso 2',
				descripcion:
					'PabloPicasso 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/2.jpg',
			},
			{
				id: 53,
				nombre: 'PabloPicasso 3',
				descripcion:
					'PabloPicasso 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/3.jpg',
			},
			{
				id: 54,
				nombre: 'PabloPicasso 4',
				descripcion:
					'PabloPicasso 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/4.jpg',
			},
			{
				id: 55,
				nombre: 'PabloPicasso 5',
				descripcion:
					'PabloPicasso 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/5.jpg',
			},
			{
				id: 56,
				nombre: 'PabloPicasso 6',
				descripcion:
					'PabloPicasso 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/6.jpg',
			},
			{
				id: 57,
				nombre: 'PabloPicasso 7',
				descripcion:
					'PabloPicasso 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/7.jpg',
			},
			{
				id: 58,
				nombre: 'PabloPicasso 8',
				descripcion:
					'PabloPicasso 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/8.jpg',
			},
			{
				id: 59,
				nombre: 'PabloPicasso 9',
				descripcion:
					'PabloPicasso 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/9.jpg',
			},
			{
				id: 60,
				nombre: 'PabloPicasso 10',
				descripcion:
					'PabloPicasso 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Pablo_Picasso/10.jpg',
			},
		],
		Rembrandt: [
			{
				id: 61,
				nombre: 'Rembrandt 1',
				descripcion:
					'Rembrandt 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/1.jpg',
			},
			{
				id: 62,
				nombre: 'Rembrandt 2',
				descripcion:
					'Rembrandt 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/2.jpg',
			},
			{
				id: 63,
				nombre: 'Rembrandt 3',
				descripcion:
					'Rembrandt 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/3.jpg',
			},
			{
				id: 64,
				nombre: 'Rembrandt 4',
				descripcion:
					'Rembrandt 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/4.jpg',
			},
			{
				id: 65,
				nombre: 'Rembrandt 5',
				descripcion:
					'Rembrandt 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/5.jpg',
			},
			{
				id: 66,
				nombre: 'Rembrandt 6',
				descripcion:
					'Rembrandt 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/6.jpg',
			},
			{
				id: 67,
				nombre: 'Rembrandt 7',
				descripcion:
					'Rembrandt 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/7.jpg',
			},
			{
				id: 68,
				nombre: 'Rembrandt 8',
				descripcion:
					'Rembrandt 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/8.jpg',
			},
			{
				id: 69,
				nombre: 'Rembrandt 9',
				descripcion:
					'Rembrandt 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/9.jpg',
			},
			{
				id: 70,
				nombre: 'Rembrandt 10',
				descripcion:
					'Rembrandt 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Rembrandt/10.jpg',
			},
		],
		Salvador_Dalí: [
			{
				id: 61,
				nombre: 'SalvadorDalí 1',
				descripcion:
					'SalvadorDalí 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/1.jpg',
			},
			{
				id: 62,
				nombre: 'SalvadorDalí 2',
				descripcion:
					'SalvadorDalí 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/2.jpeg',
			},
			{
				id: 63,
				nombre: 'SalvadorDalí 3',
				descripcion:
					'SalvadorDalí 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/3.jpg',
			},
			{
				id: 64,
				nombre: 'SalvadorDalí 4',
				descripcion:
					'SalvadorDalí 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/4.jpg',
			},
			{
				id: 65,
				nombre: 'SalvadorDalí 5',
				descripcion:
					'SalvadorDalí 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/5.jpg',
			},
			{
				id: 66,
				nombre: 'SalvadorDalí 6',
				descripcion:
					'SalvadorDalí 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/6.jpg',
			},
			{
				id: 67,
				nombre: 'SalvadorDalí 7',
				descripcion:
					'SalvadorDalí 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/7.jpg',
			},
			{
				id: 68,
				nombre: 'SalvadorDalí 8',
				descripcion:
					'SalvadorDalí 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/8.jpg',
			},
			{
				id: 69,
				nombre: 'SalvadorDalí 9',
				descripcion:
					'SalvadorDalí 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/Salvador_Dalí/9.jpg',
			},
		],
		VanGogh: [
			{
				id: 70,
				nombre: 'VanGogh 1',
				descripcion:
					'VanGogh 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/1.jpg',
			},
			{
				id: 71,
				nombre: 'VanGogh 2',
				descripcion:
					'VanGogh 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/2.jpg',
			},
			{
				id: 72,
				nombre: 'VanGogh 3',
				descripcion:
					'VanGogh 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/3.jpg',
			},
			{
				id: 73,
				nombre: 'VanGogh 4',
				descripcion:
					'VanGogh 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/4.jpg',
			},
			{
				id: 74,
				nombre: 'VanGogh 5',
				descripcion:
					'VanGogh 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/5.jpg',
			},
			{
				id: 75,
				nombre: 'VanGogh 6',
				descripcion:
					'VanGogh 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/6.jpg',
			},
			{
				id: 76,
				nombre: 'VanGogh 7',
				descripcion:
					'VanGogh 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/7.jpg',
			},
			{
				id: 77,
				nombre: 'VanGogh 8',
				descripcion:
					'VanGogh 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/8.jpg',
			},
			{
				id: 78,
				nombre: 'VanGogh 9',
				descripcion:
					'VanGogh 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/VanGogh/9.jpg',
			},
		],
	},
};

const {fotos} = datos;


var dataCategorias = {
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

const {categorias} = dataCategorias;
const contendedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria) => {
   const nuevaCategoria =  document.createElement('a');
   const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
   `;

   nuevaCategoria.innerHTML = plantilla;
   nuevaCategoria.classList.add('categoria');
   nuevaCategoria.href = '#';
   nuevaCategoria.dataset.categoria = categoria.id;

   contendedorCategorias.append(nuevaCategoria);
});

const galeria$4 = document.getElementById('galeria');


const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria$4.querySelector('.galeria__imagen').src = ruta;
    galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria$4.querySelector('.galeria__titulo').innerText = nombre;
    galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];
    let indexImagenActual = '';

    fotos.forEach((foto, index ) => {
        if(foto.id === id) {
            indexImagenActual = index;
        }
    });

    if(galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0){
    //Eliminamos la clase active de cualquier slide.
    
        galeria$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    //Marcamos la imagen del carousel como activa.
        galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};

const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria$4.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual){
            indexImagenActual = index;
        }
    });

    if (direccion === 'siguiente') {
        if(fotos[indexImagenActual + 1]){
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }

    } else if(direccion === 'anterior') {
        if(fotos[indexImagenActual - 1]){
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};

const contendorCategorias = document.getElementById('categorias');
const galeria$3 = document.getElementById('galeria');

contendorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('a')){
        galeria$3.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        

        const categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria$3.dataset.categoria = categoriaActiva;

        const fotos = datos.fotos[categoriaActiva];
        const carousel = galeria$3.querySelector('.galeria__carousel-slides');

        const {id, nombre, ruta, descripcion} = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion );

        carousel.innerHTML = '';

        fotos.forEach((foto) =>  {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
                </a>
            `;  
            galeria$3.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
        
    }
});

const galeria$2 = document.getElementById('galeria');
const cerrarGaleria = () => {
    galeria$2.classList.remove('galeria--active');
    document.body.style.overflow = '';
};

const slideClick = (e) => {

    let ruta, nombre, descripcion;
    const id  = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    
    datos.fotos[categoriaActiva].forEach(foto => {
        if(foto.id === id){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagen(id, nombre, ruta, descripcion);
};

const galeria$1 =  document.getElementById('galeria');

const carousel = (direccion) => {

    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting === true){
                return entrada;
            }
        });

        if(direccion === 'atras'){
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
            
            if(indexPrimerSlideVisible >= 1 ){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            }
           


        } else if(direccion === 'adelante'){
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);
            
            if(entradas.length - 1 > indexUltimoSlideVisible){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
    
                }); //Nos permite hacer un scroll y ponerlo a la vista.
            }
          
        }
        
        const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, opciones);

    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (e) => {
    
    const boton = (e.target.closest('button'));

    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

    // - - - CAROUSEL SLIDE CLICK :

    if(e.target.dataset.id){
       slideClick(e);
    }

    // - - - Siguiente imagen : 
    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    }
    // - - - Anterior imagen : 
    if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }

    // - - - Carousel Adelante : 
    if (boton?.dataset?.accion === 'siguiente-slide') {
        carousel('adelante');
    }
    // - - - Carousel Atras : 
    if (boton?.dataset?.accion === 'anterior-slide') {
        carousel('atras');
    }
});
