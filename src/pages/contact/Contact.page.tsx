import React, { useState } from 'react'
import Accordion from "../../components/accordion/Accordion.component"
import Button from "../../molecules/Buttons.mole"
import Icon from "../../molecules/Icon.mole"
import Input from "../../molecules/Input.mole"
import Textarea from "../../molecules/Textarea.mole"

type Props = {}

function Contact({ }: Props) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("");
    const [date,setDate] = useState((new Date()).toDateString());

    return (
        <div className="flex-1 text-gray-light flex">
            <div className="w-80 border-gray-base border-r h-full">
                <Accordion defaultOpen>
                    <Accordion.Header
                        label="contacts "
                        icon="arrow-right"
                        className="h-10 border-y border-gray-base -mt-px"
                    />
                    <Accordion.Body className="my-3">

                        <div className="ml-6 my-1 flex items-center gap-2">
                            <Icon className="w-4 object-fit" icon="mail" />
                            <h1 className="text-white-muted text-md">
                                <a href="mailto:imran.shaikh.contact@gmail.com">contac@gmail.com</a>
                            </h1>
                        </div>

                        <div className="ml-6 my-1 flex items-center gap-2 mt-4">
                            <Icon className="w-4 object-fit" icon="phone" />
                            <h1 className="text-white-muted text-md">+8801824182**</h1>
                        </div>

                    </Accordion.Body>
                </Accordion>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="border-gray-base border-b h-10">
                    <div className="flex items-center border-gray-base border-r w-max h-full px-4">
                        <p className="mr-10">contacts</p>
                        <Icon icon="close" className="" />
                    </div>
                </div>
                <div className="flex items-stretch flex-1">
                    <div className="flex-1 border-gray-base border-r flex items-center justify-center">
                        <div className="w-full max-w-sm space-y-5">
                            <Input onChange={setName} type="text" label="_name" placeholder="Jonathon Davis" />
                            <Input onChange={setEmail} type="email" label="_email" placeholder="your@gmail.com" />
                            <Textarea onChange={setMessage} label="_message" placeholder="message..." />
                            <Button.Default label="submit-message" className="!mt-8" />
                        </div>
                    </div>
                    <div className="flex-1 justify-center items-center flex my-6">
                        <div className="text-iris-base text-lg font-medium leading-6">
                            {[<p className="space-x-2  ">
                                <span className="text-orange-base">const</span>
                                <span>button</span>
                                <span>=</span>
                                <span>
                                    <span>document.queryselector</span>
                                    <span>(</span>
                                    <span className="text-orange-light">'#sendBtn'</span>
                                    <span>)</span>
                                    <span>;</span>
                                </span>
                            </p>,
                            <br />,
                            <p className="space-x-3">
                                <span className="text-orange-base">const</span>
                                <span>message</span>
                                <span>=</span>
                                <span className="text-gray-light">{"{"}</span>
                            </p>,
                            <p className="space-x-2">
                                <span>&nbsp;name:</span>
                                <span className="text-orange-light">"{name}"</span>
                            </p>,
                            <p className="space-x-2">
                                <span>&nbsp;email:</span>
                                <span className="text-orange-light">"{email}"</span>
                            </p>,
                            <p className="space-x-2 flex">
                                <span>&nbsp;message:</span>
                                <span className="text-orange-light max-w-md">"{message}"</span>
                            </p>,
                            <p className="space-x-2">
                                <span>&nbsp;date:</span>
                                <span className="text-orange-light">"{date}"</span>
                            </p>,
                            <p className="text-gray-light">{"}"}</p>,
                            <br />,
                            <p>
                                <span>button.addEventListener(</span>
                                <span className="text-orange-light">'click'</span>
                                <span className="text-gray-light">, ()</span>
                                <span className="text-green-light px-1">{"=>"}</span>
                                <span className="text-gray-light">{"{"}</span>
                            </p>,
                            <p className="">
                                &nbsp;form
                                <span className="text-gray-light">.</span>
                                send
                                <span className="text-gray-light">(</span>
                                message
                                <span className="text-gray-light">);</span>
                            </p>,
                            <p className="text-gray-light">{"});"}</p>].map((element,i)=>(
                                <div key={i} className="flex space-x-12">
                                    <p className="text-gray-light">{i+1}</p>
                                    {element}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact