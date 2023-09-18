import React from "react";
import { Card, Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Portofolio() {
  return (
    <div>
      <div className="w-[100%]">
        <div className="bg-[url('/Slicing.jpg')]  bg-fixed ">
          <div className="flex justify-center backdrop-brightness-[.8] items-center h-screen p-6">
            <div className=" rounded-md w-96  shadow-xl image-full ">
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "400px" }}
              >
                <Card.Body>
                  <Link
                    className="w-[100%]"
                    href="https://slicing-landing-page-theta.vercel.app/"
                  >
                    <Text className="text-2xl font-semibold text-center">
                      Slicing Landing Page
                    </Text>
                  </Link>
                </Card.Body>
              </Card>
              <div className="bg-[#e3e3e3f2] rounded-2xl  p-5">
                    <h1 className="flex justify-center  font-semibold">
                      Build With
                    </h1>
                    <motion.div className="flex justify-center"
                    whileHover={{rotate: 40}}
                    >
                    <Image src='/React.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="bg-[url('/myPorto.jpg')]  bg-fixed ">
          <div className="flex justify-center backdrop-brightness-[.8] items-center h-screen p-6">
            <div className=" rounded-md w-96  shadow-xl image-full ">
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "400px" }}
              >
                <Card.Body>
                  <Link
                    className="w-[100%]"
                    href="https://fahlevitest-ingmi08kb-linvxcode.vercel.app/?vercelToolbarCode=LLHoxZ4_PBk-N0J"
                  >
                    <Text className="text-2xl font-semibold text-center">
                      Itegrasi Api Apex Legends
                    </Text>
                  </Link>
                </Card.Body>
              </Card>
              <div className="bg-[#e3e3e3f2] rounded-2xl  p-5">
                    <h1 className="flex justify-center  font-semibold">
                      Build With
                    </h1>
                    <motion.div className="flex justify-center"
                    whileHover={{rotate: 40}}
                    >
                    <Image src='/React.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="bg-[url('/SimpleCrud.jpg')] image-full bg-fixed bg-[900px]">
          <div className="flex justify-center backdrop-brightness-[.8] items-center h-screen p-6">
            <div className="  rounded-md w-96  shadow-xl image-full ">
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "400px" }}
              >
                <Card.Body>
                  <Link
                    className="w-[100%]"
                    href="https://m-fahlevi-test-g72329htg-linvxcode.vercel.app/?vercelToolbarCode=0kai9XODrtJNGRo"
                  >
                    <Text className="text-2xl font-semibold text-center">
                      Simple Crud
                    </Text>
                  </Link>
                </Card.Body>
              </Card>
                  <div className="bg-[#e3e3e3f2] rounded-2xl  p-5">
                    <h1 className="flex justify-center  font-semibold">
                      Build With
                    </h1>
                    <motion.div className="flex justify-center"
                    whileHover={{rotate: 40}}
                    >
                    <Image src='/React.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="bg-[url('/tradisional.jpg')] image-full bg-fixed bg-[900px]">
          <div className="flex justify-center backdrop-brightness-[.8] items-center h-screen p-6">
            <div className="  rounded-md w-96  shadow-xl image-full ">
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "400px" }}
              >
                <Card.Body>
                  <Link
                    className="w-[100%]"
                    href="https://github.com/linvxcode/traditional-instrument-web"
                  >
                    <Text className="text-2xl font-semibold text-center">
                      Traditional Music Instrument 
                    </Text>
                  </Link>
                </Card.Body>
              </Card>
              <div className="bg-[#e3e3e3f2] rounded-2xl  p-5">
                    <h1 className="flex justify-center  font-semibold">
                      Build With
                    </h1>
                    <motion.div className="flex justify-center"
                    whileHover={{scale: 1.1}}
                    >
                    <Image src='/laravel.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]" data-tip="hello">
        <div className="bg-[url('/pc.jpg')] image-full bg-fixed bg-[900px]">
          <div className="flex justify-center backdrop-brightness-[.8] items-center h-screen p-6">
            <div className="  rounded-md w-96  shadow-xl image-full " >
              <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "400px" }}
              >
                <Card.Body>
                  <Link
                    className="w-[100%]"
                    href="https://github.com/linvxcode/e-warung"
                  >
                    <Text className="text-2xl font-semibold text-center">
                      E-Warung
                    </Text>
                  </Link>
                </Card.Body>
              </Card>
              <div className="bg-[#e3e3e3f2] rounded-2xl  p-5 " >
                    <h1 className="flex justify-center  font-semibold ">
                      Build With
                    </h1>
                    <div className="flex justify-center gap-5 ">
                    <motion.div className="flex justify-center"
                    whileHover={{rotate: 40}}
                    >
                    <Image src='/React.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                    <motion.div className="flex justify-center"
                    whileHover={{scale: 1.1}}
                    >
                    <Image src='/laravel.png' width={50} height={100} className="w-auto h-auto" alt="not" />
                    </motion.div>
                    <motion.div className="flex justify-center " 
                    whileHover={{scale: 1.1}}
                    >
                    <Image src='/inertia.png' width={50} height={100} className="w-auto h-auto lg:tooltip" alt="not" />
                    </motion.div>

                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
