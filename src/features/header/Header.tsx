import {Image} from "@nextui-org/react";
import {User} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Link,Card, CardBody, CardFooter,Avatar, CardHeader} from "@nextui-org/react";
import { LayoutGroupContext, motion } from "framer-motion";




export const Header = () => {

    return (
        // using tailwindcss
        // width 100% of parent
        <div className="flex flex-row justify-between items-center p-6 md:px-12 w-full ">
            <div className="flex flex-row align-middle items-center">
           
            
           

            

            <motion.ul
             className=""
             initial={{ scale: 0 }}
             animate={{ rotate: 360, scale: 1 }}
           
             transition={{
               type: "spring",
               stiffness: 560,
               damping: 100
             }}
            >

            <Image
            width={50}
            alt="NextUI hero Image"
            src="https://img.icons8.com/ios-glyphs/90/radar.png"
            />
            </motion.ul>
            <h1 className="text-4xl font-light text-gray-900"> Radar </h1>
           
            

         
            </div>
           

            <Popover showArrow placement="bottom" >
      <PopoverTrigger>
        <User  
            description="Développeur fullstack"
            isFocusable
            avatarProps={{
                size: "md",
                color: "success",
                isBordered: true,
                src: "/public/assets/me.jpg",
            }}
            name="Ben Gregory"
           />
      </PopoverTrigger>
      <PopoverContent className="p-1">
      <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered color="success" radius="full" size="md" src="/public/assets/me.jpg" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Ben Gregory</h4>
            <h5 className="text-small tracking-tight text-default-500">@bengrgory</h5>
          </div>
        </div>
       
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          Full-stack developer, Junior, 21yo, France
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <Link color="primary"  isBlock showAnchorIcon  href="https://www.instagram.com/bengrgory/">
          Instagram
        </Link>
        <Link color="primary"  isBlock showAnchorIcon href="https://github.com/BenGregory23">
          Github
        </Link>
      </CardFooter>
    </Card>
      </PopoverContent>
    </Popover>
           

        </div>

    )

}