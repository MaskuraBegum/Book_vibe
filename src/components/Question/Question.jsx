

const Question = () => {
    return (
        <div className="bg-gray-50 p-6 mt-4">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className="flex justify-center items-center">
                    <div className="space-y-4">
                    <textarea className="textarea textarea-accent w-full lg:w-96" placeholder="write your question"></textarea>
                    <br />
                    <input className="w-full h-[50px] p-4 rounded-xl" type="email" name="" id="" placeholder="Enter your email" required/>
                    <br />
                    <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="border-2 border-blue-100 rounded-xl p-4 py-12">
                    <div className="flex justify-center items-center p-4 ">
                        <h1 className="text-4xl ">Frequently Asked Question</h1>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                        How can I report inappropriate content in a book review?
                        </div>
                        <div className="collapse-content">
                            <p>If you come across any book reviews containing inappropriate content or violating our community guidelines, please report them immediately by clicking on the Report button located next to the review. Our team will review the report and take appropriate action.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Are book reviews moderated before being published?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, all book reviews are moderated by our team to ensure they meet our community guidelines and standards. This process helps maintain the quality and integrity of the reviews on our platform.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How can I contact customer support for assistance?
                        </div>
                        <div className="collapse-content">
                            <p>If you need assistance or have any questions regarding our book review website, you can contact our customer support team by sending an email to support@example.com. Our team will be happy to assist you with any inquiries or issues you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;