import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { Buttons } from "../buttons";

const Cards = {
  CardCertificate: ({ title, author, code, image }) => {
    return (
      <Card className="py-4 w-fit mx-auto">
        <CardHeader className="pb-5 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-large line-clamp-2 max-w-[300px] text-black">{title}</h3>
          <small className="text-default-500">{author}</small>
          <small className="text-default-500">Code Licence : {code}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Image Certificate"
            className="object-cover rounded-xl"
            src={image}
            width={300}
          />
        </CardBody>
      </Card>
    );
  },
  CardProject: ({
    image,
    title,
    desc,
    link_sourceCode,
    link_demo,
    techStack,
    projectType,
  }) => {
    return (
      <Card className="py-4 h-fit sm:w-[350px] w-[325px] mx-auto">
        <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
          {/* <h4 className="text-[18px] font-semibold mb-3">Project #1</h4> */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={340}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-[#3F3F3F] text-[22px] font-semibold">
              {title}
            </h3>
            <small className="bg-transparent border-2 border-[#3e3e3e] py-1 px-2 rounded-lg text-black mb-2 whitespace-nowrap">
              {projectType}
            </small>
          </div>
          <p className="opacity-70 line-clamp-3 text-sm mt-1 max-w-[350px] text-[#171717]">
            {desc}
          </p>
          <div className="flex gap-4 mt-4">
            <Link href={link_demo}>
              <Buttons.CTA
                size="sm"
                className="bg-[#4F4F4F] text-[16px] py-5 text-white px-8"
              >
                Demo
              </Buttons.CTA>
            </Link>
            <Link href={link_sourceCode}>
              <Buttons.CTA
                size="sm"
                className="bg-[#4F4F4F] text-[16px] py-5 text-white px-3"
              >
                Source Code
              </Buttons.CTA>
            </Link>
          </div>
        </CardBody>
        <CardFooter className="flex gap-[6px] flex-wrap">
          {techStack.map((tech, index) => (
            <small
              key={index}
              className="border-2 border-black px-4 py-1 rounded-full text-[12px] text-[#353535] bg-[#79797934] font-semibold tracking-[1px]"
            >
              {tech}
            </small>
          ))}
        </CardFooter>
      </Card>
    );
  },
};

export { Cards };
