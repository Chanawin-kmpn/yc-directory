import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation // ถ้าต้องการอัพเดตข้อมูล real time ให้ set เป็น false แต่ถ้าต้องการ cache ข้อมูล ทุกๆ 60 นาทีให้ set เป็น true
});
