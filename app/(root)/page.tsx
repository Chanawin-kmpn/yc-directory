import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const params = { search: query || null };

	const session = await auth();

	console.log(session?.id);

	// const posts = await client.fetch(STARTUPS_QUERY);
	const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params }); //เพิ่ม params เมื่อเป็นตัวเลือกเพิ่มเติมสำหรับการเรียกข้อมูลใน Sanity

	// const posts = [
	// 	{
	// 		_createdAt: new Date(),
	// 		views: 55,
	// 		author: {
	// 			_id: 1,
	// 			name: 'Pond',
	// 		},
	// 		_id: 1,
	// 		description: 'This is a description',
	// 		image: 'https://i.ytimg.com/vi/6v6dbxPlsXs/maxresdefault.jpg',
	// 		category: 'Robots',
	// 		title: 'We Robots',
	// 	},
	// ];
	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
					Competitions.
				</p>

				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : 'All Startups'}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupTypeCard) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No startups found</p>
					)}
				</ul>
			</section>

			<SanityLive />
		</>
	);
}