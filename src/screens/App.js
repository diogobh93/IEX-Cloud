import React, { Component } from 'react';
import { Alert, TextInput, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import styles from '../styles/styles'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            symbol: null,
            dice: null,
            placeholder: "Digite o símbolo de ação"
        }
    }
    // Modificação do texto principal
    onChangeText(text) {
        this.setState({ symbol: text });
    }

    // Utilização da API 
    handlerIEX = () => {
        var token = 'YOU_TOKEN'
        var baseURL = `https://cloud.iexapis.com/stable/stock/${this.state.symbol}/quote?token=${token}`;

        fetch(baseURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({ dice: data })
            })
            .catch((error) => {
                return Alert.alert("Erro","Não foi possível encontrar informações, digite novamente!")
            })
    }


    render() {
        const { dice, symbol, placeholder } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: '#673AB7' }}>
                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.title}> IEX ClOUD </Text>

                        <Image
                            style={{ width: 120, height: 120 }}
                            resizeMode='center'
                            source={require('../image/logo.png')}
                        />
                        <Text style={styles.description}> Valores de Ações </Text>

                        <TextInput
                            style={styles.textInput}
                            onFocus={() => this.setState({ placeholder: '' })}
                            onBlur={() => this.setState({ placeholder: 'Digite o símbolo de ação' })}
                            placeholder={placeholder}
                            placeholderTextColor={"#9474CC"}
                            onChangeText={(text) => this.onChangeText(text)}
                            numberOfLines={1}
                            autoCorrect={false}
                            value={symbol}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handlerIEX}>
                            <Text style={styles.textButton}> PESQUISAR </Text>
                        </TouchableOpacity>

                         {dice == null ? null :
                            <View style={styles.containerInfos}>

                                <Text style={styles.company}>{dice.companyName}</Text>

                                <Text style={styles.info}> Último Valor</Text>

                                <NumberFormat value={dice.latestPrice}
                                    displayType={'text'}
                                    thousandSeparator={true} prefix={'R$ '}
                                    renderText={value => <Text style={styles.latestPrice}>{value}</Text>} />
                            </View>
                        }

                    </View>
                </ScrollView>
            </View>
        );
    }
}
