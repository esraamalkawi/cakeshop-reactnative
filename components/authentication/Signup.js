import React, { useState } from "react";

import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { createUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (event) => {
    dispatch(createUser(user, navigation));
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} p={2} w="90%" mx="auto">
        <Heading color="muted.400" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              firstName
            </FormControl.Label>
            <Input
              onChangeText={(firstName) => setUser({ ...user, firstName })}
              //   autoCapitalize={false}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              lastName
            </FormControl.Label>
            <Input
              onChangeText={(lastName) => setUser({ ...user, lastName })}
              //   autoCapitalize={false}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              email
            </FormControl.Label>
            <Input
              onChangeText={(email) => setUser({ ...user, email })}
              //   autoCapitalize={false}
            />
          </FormControl>

          <FormControl mb={5}>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              username
            </FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
              //   autoCapitalize={false}
            />
          </FormControl>

          <VStack space={2}>
            <Button onPress={handleSubmit}>
              {/* //colorScheme="cyan" _text={{color: 'white' }} */}
              Sign up
            </Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};
export default Signup;
