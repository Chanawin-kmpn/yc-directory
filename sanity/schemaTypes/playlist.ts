import { defineField, defineType } from 'sanity';

export const playlist = defineType({
	name: 'playlist', //ตั้งชื่อชุดข้อมูล
	title: 'Playlists',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title', // ตัวอย่างก็คือถ้า Title คือ 'This is a great startup' มันจะถูกแปลงเป็น 'this-is-a-great-startup'
			},
		}),
		defineField({
			name: 'select',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'startup' }] }],
		}),
	],
});
