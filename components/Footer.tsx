"use client";

import {
  Box,
  Container,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return <Image alt={"Logo"} src={"./logo.png"} width={16} height={16} />;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>我们的产品</ListHeader>
            <Link href={"https://chat.plumsai.com/#/"} target="_blank">
              AI 助手
            </Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"https://nav.plumsai.com/"} target="_blank">
                AI 导航
              </Link>
              <Tag
                size={"sm"}
                // bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                // color={"white"}
              >
                🔥
              </Tag>
            </Stack>
            {/* <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>联系我们</ListHeader>
            <Image
              rounded={"md"}
              width={"120px"}
              height={"auto"}
              alt={"wechat image"}
              src={"./wechat.png"}
              objectFit={"cover"}
            />
            {/* <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Partners</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>服务范围</ListHeader>
            <Link href={"#"}>AI 培训</Link>
            <Link href={"#"}>企业 AI 转型规划</Link>
            <Link href={"#"}>AI 模型训练</Link>
            {/* <Link href={"#"}>Law Enforcement</Link>
            <Link href={"#"}>Status</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>友情链接</ListHeader>
            <Link href={"https://openai.com/"} target="_blank">
              Openai
            </Link>
            <Link href={"https://www.midjourney.com/app/"} target="_blank">
              Midjourney
            </Link>
            {/* <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link> */}
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023{" "}
          <Link
            href={"https://ai.plumsai.com/"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            plumsai.com
          </Link>
          . All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
