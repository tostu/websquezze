<script>
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->
	<div class="navbar bg-base-100 fixed top-0">
		<div class="flex justify-center items-center content-center">
			<img
				src="https://img.icons8.com/external-filled-color-icons-papa-vector/50/null/external-utensil-cooking-instruction-icons-color-filled-filled-color-icons-papa-vector-2.png"
				alt="lemon squeezer icon"
			/>
			<span class="text-xl">WebSqueeze</span>
		</div>
	</div>
	<main>
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
		<div>
			<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
