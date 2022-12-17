<script lang="ts">
	import { fade } from 'svelte/transition';

	let links = [['班級導師', 'Homeroom'], ['各班老師', 'Subject'], ['全體老師', 'All'], ['英文老師', 'English']]
	let classes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'j1', 'j2', 'j3', 's1', 's2', 's3']
	let page = 0
	let subpage = 0

	import homeroom from './texts/homeroom.ts'
	import subject from './texts/subject.ts'
	import all from './texts/all.ts'
	import english from './texts/english.ts'
</script>

<main class="bg-orange-400 min-h-screen">
	{#if page == 0}
	<div class="flex h-screen flex-col items-center justify-center" in:fade={{delay:500}} out:fade>
		<span class="text-5xl text-center text-white">祝老師們教師節快樂</span>
		<span class="text-4xl text-center text-white mb-12">HAPPY TEACHER'S DAY</span>
		{#each links as link, index}
		<div class="border p-3 text-2xl w-110 mb-2 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{page = index+1}}>
			<span class="w-8">To:</span>
			<div class="flex-1 text-center flex flex-col">
				<span>{link[0]}</span>
				<span>{link[1]}</span>
			</div>
			<span class="w-8"></span>
		</div>
		{/each}
	</div>
	{:else if page == 1}
		{#if !subpage}
		<div class="flex flex-col items-center justify-center h-screen" in:fade={{delay:500}} out:fade>
			<span class="text-5xl text-center text-white">班級導師</span>
			<span class="text-4xl text-center text-white mb-12">Homeroom Teachers</span>
			<div class="grid grid-cols-2">
				{#each classes as link, index}
				<div class="border p-3 text-2xl mb-2 mx-1 w-40 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = link}}>
					<span class="flex-1 text-center uppercase">{link}</span>
				</div>
				{/each}
			</div>
			<div class="border p-3 text-2xl mb-2 mx-1 w-82 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{page = 0}}>{'<'} back</div>
		</div>
		{:else}
		<div class="flex flex-col" in:fade={{delay:500}} out:fade>
			<div class="border p-3 text-2xl my-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = 0}}>{'<'} back</div>
			<span class="text-4xl text-center text-white my-8 uppercase">{subpage} 想對您說...</span>
			{#if ['p1', 'p2'].includes(subpage)}
			<div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{#each Array(subpage == 'p1'?12:21) as img, index}
				<img class="shadow-xl border border-8 border-orange-300 object-cover object-center h-full" src="/{subpage}_homeroom/{index+1}.jpg">
				{/each}
			</div>
			{:else}
			{#each homeroom[subpage] as text}
				<span class="bg-orange-300 my-1 mx-2 p-3 text-2xl font-init">{text}</span>
			{/each}
			{/if}
			<div class="border p-3 text-2xl mb-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = 0}}>{'<'} back</div>
		</div>
		{/if}
	{:else if page == 2}
		{#if !subpage}
		<div class="flex flex-col items-center justify-center h-screen" in:fade={{delay:500}} out:fade>
			<span class="text-5xl text-center text-white">各班老師</span>
			<span class="text-4xl text-center text-white mb-12">Subject Teachers</span>
			<div class="grid grid-cols-2">
				{#each classes as link, index}
				<div class="border p-3 text-2xl mb-2 mx-1 w-40 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = link}}>
					<span class="flex-1 text-center uppercase">{link}</span>
				</div>
				{/each}
			</div>
			<div class="border p-3 text-2xl mb-2 mx-1 w-82 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{page = 0}}>{'<'} back</div>
		</div>
		{:else}
		<div class="flex flex-col" in:fade={{delay:500}} out:fade>
			<div class="border p-3 text-2xl my-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = 0}}>{'<'} back</div>
			<span class="text-4xl text-center text-white my-8 uppercase">{subpage} 想對您說...</span>
			{#if ['p1', 'p2'].includes(subpage)}
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{#each Array(subpage == 'p1'?12:17) as img, index}
				<img class="object-cover object-center h-full" src="/{subpage}_subject/{index+1}.jpg">
				{/each}
			</div>
			{:else}
			{#each subject[subpage] as text}
				<span class="bg-orange-300 my-1 mx-2 p-3 text-2xl font-init">{text}</span>
			{/each}
			{/if}
			<div class="border p-3 text-2xl mb-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{subpage = 0}}>{'<'} back</div>
		</div>
		{/if}
	{:else if page == 3}
		<div class="flex flex-col items-center" in:fade={{delay:500}} out:fade>
			<span class="text-4xl text-center text-white my-8 uppercase">全體老師...</span>
			{#each all as text, index}
				<span class="mx-2 text-2xl font-init text-center" in:fade={{delay:index*100+500}}>{@html text?text:'<br>'}</span>
			{/each}
			<div class="border p-3 text-2xl mb-2 mt-12 w-82 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{page = 0}}>{'<'} back</div>
		</div>
	{:else if page == 4}
		<div class="flex flex-col items-center" in:fade={{delay:500}} out:fade>
			<span class="text-4xl text-center text-white my-8 uppercase">All Teachers...</span>
			{#each english as text, index}
				<span class="mx-2 text-2xl font-init text-center" in:fade={{delay:index*100+500}}>{@html text?text:'<br>'}</span>
			{/each}
			<div class="border p-3 text-2xl mb-2 mt-12 w-82 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition" on:click={()=>{page = 0}}>{'<'} back</div>
		</div>
	{/if}
</main>

<style>

</style>