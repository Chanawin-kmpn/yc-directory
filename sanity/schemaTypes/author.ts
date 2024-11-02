import { UserIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const author = defineType({
	name: 'author', //ตั้งชื่อชุดข้อมูล
	title: 'Authors',
	type: 'document',
	icon: UserIcon,
	fields: [
		//ข้อมูลของผู้เขียนแต่ละคน
		defineField({
			name: 'id',
			type: 'number',
		}),
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'username',
			type: 'string',
		}),
		defineField({
			name: 'email',
			type: 'string',
		}),
		defineField({
			name: 'image',
			type: 'url',
		}),
		defineField({
			name: 'bio',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
});
