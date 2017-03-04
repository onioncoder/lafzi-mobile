import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    Button,
    Left,
    Icon,
    Text,
    Item,
    Input
} from 'native-base';
import { View, StyleSheet, Image, Linking } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SearchScreen extends Component {

    openHomepage() {
        Linking.openURL('http://cs.ipb.ac.id').catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <Image source={require('../../images/bg-dots.png')} style={styles.backgroundImage}>
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Header noShadow="true" style={{ backgroundColor: 'transparent' }}>
                        <Left>
                            <Button transparent androidRippleColor="rgba(120, 120, 120, 0.3)">
                                <Icon name='menu' style={{ color: 'black' }}/>
                            </Button>
                        </Left>
                    </Header>
                    <View style={{ flex: 1 }}>
                        <Grid>
                            <Row style={{justifyContent: 'center', alignItems: 'flex-end', padding: 20}} >
                                <Image source={require('../../images/logo.png')} style={{ width: 250, height: 110 }} />
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <View>
                                    <Item style={{width: 320}}>
                                        <Input placeholder='Cari lafadz'/>
                                        <Button rounded small style={{marginTop: 10}}>
                                            <Icon name='search' />
                                        </Button>
                                    </Item>
                                </View>
                            </Row>
                        </Grid>
                    </View>
                    <Footer style={{ height: 50, backgroundColor: 'transparent' }} >
                        <Button transparent androidRippleColor="rgba(120, 120, 120, 0.3)" onPress={() => this.openHomepage()}>
                            <Text style={{ color: '#803300' }} >
                                ©2017 Computer Science IPB
                            </Text>
                        </Button>
                    </Footer>
                </Container>
            </Image>
        );
    }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null    
  }
});
