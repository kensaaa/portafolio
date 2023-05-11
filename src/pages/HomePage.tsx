const HomePage = () => {
	return (
		<div className="min-h-screen bg-second-base p-5 grid grid-rows-2 gap-5">
			<div className="bg-blue-100 overflow-hidden outline outline-red-50 outline-offset-[-15px] shadow-xl">
				<img
					src="https://i.pinimg.com/originals/89/2d/a4/892da4f1c41359e70fb66f2c9dca5478.jpg"
					className="object-cover"
					alt="Foto Programador"
				/>
			</div>
			<div className="bg-red-100">
				<div className="card h-full">
					<h4 className="text-xl font-extrabold text-third">Programador Web</h4>
					<hr className="bg-second-base"/>
					<div className="card-body">
						<p className="font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Officia optio culpa explicabo at, accusamus
							dolore, officiis omnis amet sapiente esse veniam
							blanditiis possimus eaque laborum totam, fugiat
							soluta facilis ex?
						</p>
					</div>
					<button className="btn-primary w-full mt-5">ver mas ...</button>
				</div>
			</div>
		</div>
	);
};

export { HomePage };
