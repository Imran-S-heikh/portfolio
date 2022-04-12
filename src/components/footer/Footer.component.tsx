import { IconsId } from "../../assets/font-icons/icons"
import Icon from "../../molecules/Icon.mole"



interface SocialLinkProps {
    icon: IconsId,
    link: string
}

function SocialLink({icon,link}: SocialLinkProps) {
    return (
        <a href={link} className="border-r border-gray-base flex items-center px-3">
            <Icon className="text-2xl text-white-muted" icon={icon} />
        </a>
    )
}


function Footer() {
    return (
        <footer className="border-gray-base border-t flex justify-between px-4 items-center">
            <div className="flex">
                <p className="border-r border-gray-base text-white-muted font-medium py-3">find me in:</p>
               <SocialLink icon="github" link="https://github.com/Imran-S-heikh" /> 
               <SocialLink icon="github" link="https://github.com/Imran-S-heikh" /> 
               <SocialLink icon="github" link="https://github.com/Imran-S-heikh" /> 
            </div>

            <p className="text-white-muted font-medium">15:56 24/11/2021</p>
        </footer>
    )
}

export default Footer