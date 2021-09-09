import React, { Component } from 'react'
import { Image, View, Text, Dimensions } from 'react-native'
import { Card, CardItem } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/TentangRestoScreenStyles'
import { ScrollView } from 'react-native'

const { width } = Dimensions.get("window");
const height = width * 0.6;

const gambars = [
  Images.gbr1,
  Images.gbr3,
  Images.gbr4,
  Images.gbr2,
]

export default class TentangRestoScreen extends Component {
  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={{ width, height }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              onScroll={this.change}
              style={{ width, height }}
            >
              {
                gambars.map((gambar, index) => (
                  <Image
                    key={index}
                    source={gambar}
                    style={{ width, height, resizeMode: 'cover' }}
                  />
                ))
              }
            </ScrollView>
            <View style={styles.dotView}>
              {
                gambars.map((i, k) => (
                  <Text
                    key={k}
                    style={k == this.state.active ? styles.Activedot : styles.dot}>⬤</Text>
                ))
              }
            </View>
          </View>
          <ScrollView>
            <View style={{ padding: 10 }}>
              <Text style={styles.nama}>D'Original Resto & Café</Text>
              <Text>Jl. Tamalanrea Raya, Paccerakkang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90562</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>No. Telepon : </Text>
                <Text style={{ color: 'blue', fontWeight: 'bold' }}>+62 813 5462 6252</Text>
              </View>
            </View>
            <Text style={styles.txtPop}>Popular</Text>
            <View style={{ padding: 10 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.ayamrica}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                  <CardItem>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.namaMenu}>Ayam Rica</Text>
                    </View>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.nasikambing}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                  <CardItem>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.namaMenu}>Nasi Goreng Kambing</Text>
                    </View>
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.miejawa}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                  <CardItem>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.namaMenu}>Mie Goreng Jawa</Text>
                    </View>
                  </CardItem>
                </Card>
              </ScrollView>
            </View>
            <Text style={styles.txtPop}>Place</Text>
            <View style={{ padding: 10 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.gbr2}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.gbr3}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                </Card>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.gbr4}
                      style={{ height: 150, width: 170, borderRadius: 10 }}
                    />
                  </CardItem>
                </Card>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}