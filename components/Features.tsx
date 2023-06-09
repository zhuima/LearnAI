import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { useAos } from "../hooks/useAos";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  useAos();
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
            data-aos="fade-right"
            data-aos-duration="100"
          >
            我们的故事
          </Text>
          <Heading data-aos="fade-right" data-aos-duration="1000">
            一群有担当有活力的年轻人
          </Heading>
          <Text
            data-aos="fade-right"
            data-aos-duration="1000"
            color={"gray.500"}
            fontSize={"lg"}
          >
            我们来自不同的领域，但是对AI的热爱让我们聚到了一起，我们希望能够用AI的力量来改变世界，让世界变得更美好。我们能做的
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"AI 培训"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"模型构建"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"工具交付"}
            />
          </Stack>
        </Stack>
        <Flex data-aos="fade-left" data-aos-duration="2000">
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"./feature.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
