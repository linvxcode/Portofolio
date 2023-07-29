import React from "react";
import { Card, Text } from "@nextui-org/react";
import Link from "next/link";

function Portofolio() {
  return (
    <div>
      <div className="w-[100%]">
        <div className="bg-[url('/myPorto.jpg')]  bg-fixed ">
          <div className="flex justify-center items-center h-screen p-6">
            <div className=" bg-[#e3e3e3f2] rounded-md w-96  shadow-xl image-full ">
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
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="bg-[url('/SimpleCrud.jpg')] image-full bg-fixed bg-[900px]">
          <div className="flex justify-center items-center h-screen p-6">
            <div className=" bg-[#e3e3e3f2] rounded-md w-96  shadow-xl image-full ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
