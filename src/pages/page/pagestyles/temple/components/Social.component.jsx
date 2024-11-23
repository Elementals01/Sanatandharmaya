import React, { useEffect, useState } from "react";
import axios from "axios";
import MiniFileUploader from "../../../../file-manager/components/MiniFileuploader";

function Socialcomponent(setothers, values) {
	function setonchange(image, index) {
		const list = [...fields];

		list[index].image = image;
		setfields(list);

		setothers(fields);
	}

	const [fields, setfields] = useState([]);

	const inputHandler = (e, index) => {
		const { name, value } = e.target;
		const list = [...fields];
		list[index][name] = value;
		setfields(list);
		setothers(fields);
	};

	const AddOthersfield = () => {
		setfields([...fields, { image: "", label: "", link: "" }]);
		setothers(fields);
	};

	useEffect(() => {
		setfields(values);
	}, [values]);
	return (
		<>
			{fields.map((data, i) => {
				return (
					<div className="socialmedia " key={i}>
						<MiniFileUploader
							title={"Upload Image"}
							onAdd={(image) => setonchange(image, i)}
							value={data?.image}
						/>
						<div className="labelinput">
							<span>Add Label</span>
							<input
								type="text"
								onChange={(e) => inputHandler(e, i)}
								name="label"
								value={data?.label}
							/>
						</div>
						<div className="sociallink">
							<span>Add Link</span>
							<input
								type="text"
								onChange={(e) => inputHandler(e, i)}
								name="link"
								value={data?.link}
							/>
						</div>
					</div>
				);
			})}
			<div className="center mb-4">
				{" "}
				<button
					className="addButton btnoutline"
					onClick={AddOthersfield}>
					Add More
				</button>
			</div>
		</>
	);
}

export default Socialcomponent;
