import avatar from './avatar.jpg';

const IntroSection = (props) => {
	return (
		<section id="section-01" class="section section-sub-header animation interaction-in">
			<div class="section-body">
				<div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
					<img src={avatar} class="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
					<h1 class="display-1 display-animated display-animated-in animation-translate animation-item-2">{props.name}</h1>
					<p class="lead animation-translate animation-item-3">{ props.role }</p>
				</div>
			</div>

		</section>
	)
}

export default IntroSection