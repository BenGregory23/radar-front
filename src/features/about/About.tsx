import {Card, Snippet, Image, CardFooter, CardHeader, CardBody, Divider, Button, Spacer, Link} from "@nextui-org/react";


const About = () => {

   

    return (
        <div className="flex flex-col justify-center items-center w-full">
        
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none max-w-lg shadow-medium my-10"
               
                >
                <CardHeader className="flex gap-3">
                    <Image
                    alt="radar logo"
                    height={40}
                    radius="sm"
                    src="https://img.icons8.com/ios-glyphs/90/radar.png"
                    width={40}
                    />
                    <div className="flex flex-col">
                    <p className="text-md">Radar</p>
                    <p className="text-small text-default-500">www.radar.bengregory.live</p>
                    </div>
                </CardHeader>
                <Divider/>
                
                <CardBody className="text-default-900 p-4 min-h-[200px]">
                    <p>Radar is a tool that allows me to track the number of visits on my differents projects. These project can be from various sources such as my portfolio, a mobile app, my github, etc.</p>
                    
                    <Spacer y={3} />

                    <p>
                        Using Radar I can determine which projects are getting used the most and how the usage is evolving over time. These information are a good insight on what is a successfull and interesting project. 
                    </p>

                    <Spacer y={3} />
                    <p> 
                    This tool is still in development and is not supposed to be used by anyone else than me. However, if you are interested in using it, feel free to contact me.
                    </p>

                </CardBody>
                <Divider/>
                <CardFooter>

                    <Button href="https://github.com/BenGregory23" color="success" className="w-full mx-2" as={Link} showAnchorIcon={true}>
                        Check out the GitHub repository!
                    </Button>
                    
                   
                </CardFooter>
                
                </Card>

                <Card className="border-none max-w-lg shadow-medium my-1 w-full"
                >
                    <CardHeader>
                        <h1 className="text-lg font-medium">
                             How to use Radar ?
                        </h1>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <Snippet
                            symbol=""
                            size="sm"
                        >
                     <span>const ip = "127.0.0.0"</span>
                     <span>const source = "Source"</span>
                    
                        </Snippet>
                    </CardBody>
                </Card>
           
        </div>
    )

}

export default About