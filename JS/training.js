'use strict';

const openFaq = document.querySelectorAll('.faqs_container');

openFaq.forEach((f) => {
	f.addEventListener('click', (t) => {
		t.classList.toggle('active');
	});
});

@media (max-width: 1024px) {
	.sub__nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12rem;
		width: 100%;
		text-align: center;
	}
	.flex,
	.flex2 {
		display: flex;
		flex-direction: column;
	}
	.top_sec h1 {
		color: var(--dark);
		font-size: 40px;
		margin: 2rem;
		position: relative;
	}
	.top_sec p {
		text-align: center;
		line-height: 1.6em;
		width: 70%;
		text-align: center;
		/* margin: 2.5rem; */
		margin: auto;
		font-size: 16px;
		color: var(--med-dark);
	}
	img.section2__img {
		width: 100%;
		float: unset;
		margin: auto;
	}
	.red {
		color: var(--red);
		position: relative;
	}

	.img__holder {
		margin-left: 36rem;
		margin-top: -3.5rem;
	}
	.top__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2%;
		margin-top: 3rem;
		width: 100%;
	}
	.btn {
		color: var(--white);
		width: 24%;
		padding: 0.7rem;
		border-bottom-right-radius: 0.7rem;
		background: var(--red);
		border: none;
		outline: none;
		font-size: 16px;
	}
	.btn:nth-child(2) {
		background: var(--med-dark) !important;
	}
	.section1__img {
		width: 50%;
		margin: auto;
		margin-top: 4rem;
	}
	.line1 {
		display: block;
		z-index: -1;
		width: 40%;
		/* width: 10%; */
		top: 50rem;
		right: 0;
		position: absolute;
	}
	.sec,
	.column {
		padding: 0 3rem;
	}

	.b {
		width: 100%;
	}
	.sect h1 {
		width: 30rem;
		font-size: 30px;
		color: var(--dark);
		margin: unset;
	}
}
@media (max-width: 1000px) {
	.modal {
		width: 70%;
	}
	.item {
		display: none;
	}
	.sec {
		flex-direction: column;
	}
	img.section2__img {
		width: 60%;
		margin-top: 5rem;
	}
	.sect h1 {
		width: unset;
		margin-bottom: 1rem;
		width: 90%;
		line-height: 1.5em;
		text-align: center;
		font-size: 40px;
	}
	.sect h2 {
		font-weight: bold;
		margin-bottom: 0.7rem;
		font-size: 20px;
	}
	.sect p {
		font-size: 20px;
		margin-bottom: 0.7rem;
	}
	.sect {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
	.country,
	.countries {
		width: unset;
	}
	.c {
		display: flex;
	}
	.a,
	.b {
		width: 100%;
		text-align: center;
		margin: auto;
	}
	.all_p {
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
	}
	.all_p2 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		margin: unset;
	}
	.all_p2 p {
		padding: 1rem;
	}
	.b {
		margin-top: 3rem;
	}
	.wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.line2 {
		display: none;
	}
}

@media (max-width: 500px) {
	.modal {
		width: 90%;
	}
	.nav {
		width: unset;
	}
}

.sub__nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12rem;
		width: 100%;
		text-align: center;
	}
	.flex,
	.flex2 {
		display: flex;
		flex-direction: column;
	}
	.top_sec h1 {
		color: var(--dark);
		font-size: 40px;
		margin: 2rem;
		position: relative;
	}
	.top_sec p {
		text-align: center;
		line-height: 1.6em;
		width: 70%;
		text-align: center;
		/* margin: 2.5rem; */
		margin: auto;
		font-size: 16px;
		color: var(--med-dark);
	}
	img.section2__img {
		width: 100%;
		float: unset;
		margin: auto;
	}
	.red {
		color: var(--red);
		position: relative;
	}

	.img__holder {
		margin-left: 36rem;
		margin-top: -3.5rem;
	}
	.top__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2%;
		margin-top: 3rem;
		width: 100%;
	}
	.btn {
		color: var(--white);
		width: 24%;
		padding: 0.7rem;
		border-bottom-right-radius: 0.7rem;
		background: var(--red);
		border: none;
		outline: none;
		font-size: 16px;
	}
	.btn:nth-child(2) {
		background: var(--med-dark) !important;
	}
	.section1__img {
		width: 50%;
		margin: auto;
		margin-top: 4rem;
	}
	.line1 {
		display: block;
		z-index: -1;
		width: 40%;
		/* width: 10%; */
		top: 50rem;
		right: 0;
		position: absolute;
	}
	.sec,
	.column {
		padding: 0 3rem;
	}

	.b {
		width: 100%;
	}
	.sect h1 {
		width: 30rem;
		font-size: 30px;
		color: var(--dark);
		margin: unset;
	}
}
@media (max-width: 1000px) {
	.modal {
		width: 70%;
	}
	.item {
		display: none;
	}
	.sec {
		flex-direction: column;
	}
	img.section2__img {
		width: 60%;
		margin-top: 5rem;
	}
	.sect h1 {
		width: unset;
		margin-bottom: 1rem;
		width: 90%;
		line-height: 1.5em;
		text-align: center;
		font-size: 40px;
	}
	.sect h2 {
		font-weight: bold;
		margin-bottom: 0.7rem;
		font-size: 20px;
	}
	.sect p {
		font-size: 20px;
		margin-bottom: 0.7rem;
	}
	.sect {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
	.country,
	.countries {
		width: unset;
	}
	.c {
		display: flex;
	}
	.a,
	.b {
		width: 100%;
		text-align: center;
		margin: auto;
	}
	.all_p {
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
	}
	.all_p2 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		margin: unset;
	}
	.all_p2 p {
		padding: 1rem;
	}
	.b {
		margin-top: 3rem;
	}
	.wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.line2 {
		display: none;
	}
}

@media (max-width: 500px) {
	.modal {
		width: 90%;
	}
	.nav {
		width: unset;
	}
}
