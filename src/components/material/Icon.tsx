
interface IconProps {
    icon: string;
    text: string;
    alt: string;
}

export const Icon = ({icon, text, alt}:IconProps) => {
  return (
    <div className="hidden items-center gap-1.5 xl:flex lg:flex md:flex">
        <img src={ icon } alt={alt} className="w-4 hidden xl:block lg:block md:block"/>
        <p className="hidden text-xs xl:block">{ text }</p>
    </div>
  )
}
