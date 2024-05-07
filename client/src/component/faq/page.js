import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import "./faq.css";
const page = () => {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<>
			<div className="section_faq custom_accordian">
				<div className="container">
					<div className="faq_top">
						<h2>Frequently asked questions</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
					</div>
					<Accordion>
						<AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
							<button className='btn'>New</button>
						</AccordionItem>
						<AccordionItem
							key="2"
							aria-label="Authentification Issues"
							subtitle={
							<span>
								Porttitor nec est nisi, id nunc. <strong>New</strong>
							</span>
							}
							title="Accordion 2"
						>
							{defaultContent}
						</AccordionItem>
						<AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
							{defaultContent}
						</AccordionItem>
						<AccordionItem key="4" aria-label="Accordion 4" subtitle="Press to expand" title="Accordion 4">
							{defaultContent}
						</AccordionItem>
						<AccordionItem key="5" aria-label="Accordion 5" subtitle="Press to expand" title="Accordion 5">
							{defaultContent}
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</>
	);
}

export default page