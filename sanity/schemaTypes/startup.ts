import { defineField, defineType } from 'sanity';

export const startup = defineType({
	name: 'startup', //ตั้งชื่อชุดข้อมูล
	title: 'Startup',
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
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
		}),
		defineField({
			name: 'views',
			type: 'number',
		}),
		defineField({
			name: 'description',
			type: 'text',
		}),
		defineField({
			name: 'category',
			type: 'string',
			validation: (Rule) =>
				Rule.min(1).max(20).required().error('Please enter a category'),
		}),
		defineField({
			name: 'image',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'pitch',
			type: 'markdown',
		}),
	],
});
