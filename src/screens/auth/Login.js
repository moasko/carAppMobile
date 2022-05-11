import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "../../components/Toast";
import { login } from "../../backend/auth";
import { Alert } from "react-native-web";
//styles

const Login = () => {
  //states
  const [requestLoading, setRequestLoading] = useState(false);
  const [loginInfos, setLoginInfos] = useState({
    phone: "",
    password: "",
  });

  //call utils
  const navigation = useNavigation();

  // utiles functions
  const _dataIsValide = () => {
    if (loginInfos.phone && loginInfos.password) {
      return true;
    } else if (!loginInfos.phone) {
      alert("veiller entrer votre numero svp");
    } else if (!loginInfos.password) {
      alert("veiller entrer votre mot de pass svp");
    }else if(!loginInfos.phone && !loginInfos.password){
        alert("veiller entrer votre numéro et votre mot de pass svp");
        }
  };

  const _login = () => {
    if (_dataIsValide()) {
      setRequestLoading(true);
        login(loginInfos)
        .then(res => {
            setRequestLoading(false);
            console.log(res.data)
            navigation.navigate("Home");
        })
        .catch(err => {
            setRequestLoading(false);
            console.log(new Error(err).message);
        })
    }
  };

  const handleChnge = (name, value) => {
    setLoginInfos({
      ...loginInfos,
      [name]: value,
    });
  };

    //render
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>Me connecter</Text>
      </View>
      <View
        style={{
          width: "90%",
        }}
      >
        <TextInput
          style={styles.inputs}
          placeholder="Votre numeri de telephone"
          onChangeText={(text) => handleChnge("phone", text)}
          value={loginInfos.phone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.inputs}
          placeholder="Votre mot de pass"
          onChangeText={(text) => handleChnge("password", text)}
          value={loginInfos.password}
          secureTextEntry={true}
          ecureTextEntry={true}
        />
        <TouchableOpacity onPress={() => _login()} style={styles.btn}>
          <Text style={styles.btnText}>connexion</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Pas encore inscrit ?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>

      {requestLoading ? <ActivityIndicator size={"small"} color="red" /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  btn: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Login;
