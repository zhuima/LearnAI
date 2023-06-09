"use client";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>登录</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="version" content={"1.1"} />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>欢迎回来，请登录</Heading>
            <FormControl id="email">
              <FormLabel>邮箱地址</FormLabel>
              <Input type="email" placeholder="请输入邮箱地址" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>密码</FormLabel>
              <Input type="password" placeholder="请输入密码" />
            </FormControl>
            <Stack spacing={6}>
              {/* <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack> */}
              <Button colorScheme={"blue"} variant={"solid"}>
                登陆
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
