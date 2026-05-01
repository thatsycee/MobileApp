import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text} from 'react-native';

/*
import { HelloWave } from '@/components/hello-wave';
*/
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { BounceIn } from 'react-native-reanimated';


export default function HomeScreen() {
  return (
    <View style={s.screen}>
      <Image
        source={{ uri: 'https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/504248074_24796994163223795_812235706363061218_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEfgCJWMpPz2VeAzlEEBvJvDs60j55VouwOzrSPnlWi7A_7szePy2xjFDhsXmyI4LFfS_pnk2TQtFVpUGsVm136&_nc_ohc=Vn0jZkQaz-oQ7kNvwGQbVam&_nc_oc=Adr1GfIK8mnTHD1TozG7S7BmtXf-Ju07ow4lwYmnXJzdVmCErkymc0MLZTPl1Uso4a0&_nc_zt=23&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=rW6e9gFCX1BGcA74iCAc6Q&_nc_ss=7b2a8&oh=00_Af4N0WV1srZYJZeDhGwY0TrIVZ4KU8kQfQBseubYUQm5iA&oe=69FA6E2D' }}
        style={s.photo}
      />
      <Text style={s.name}>Patreece Monique U. Juan</Text>
      <Text style={s.bio}>Multimedia Arts Student | Social Media Content Specialist</Text>
    </View>
  );
}

// I change the background color, added a border and shadow. 05/01/2026
const s = StyleSheet.create({
  screen: { flex:1, alignItems: 'center', justifyContent:'center', backgroundColor: '#bcde7d' },
  photo:  { width:120, height:120, borderRadius:60, borderWidth:5, borderColor: '#f5a3dd', shadowColor: '#a74871', shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6 },
  name:   { fontSize:22, fontWeight:'bold', marginTop:12 },
  bio:    { fontSize:14, color:'#888888' }
});

/*
export default function HomeScreen() {

  const myName = "Reeze";

  const greet = (name: string) => {
    return `Welcome, ${name}! Enjoy making matcha today!`;
  };

  const classmates = ["Andee", "Caryl", "Nyn", "Jules", "Meagan", "Trigie"];

  console.log(classmates.map(name => greet(name)));

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d2f3c6', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Steps for Making Matcha</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sift & Measure:</ThemedText>
        <ThemedText>Sift 1-2 teaspoons (approx. 2-3 grams) of matcha powder into a bowl to break up clumps.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Add Water & Create Paste</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          Add a small amount (30-50ml) of warm water (roughly 80C) to the powder to make a thick paste first, which prevents lumps.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Whisk & Top Off</ThemedText>
        <ThemedText>Whisk vigorously using a bamboo whisk (chasen) in a zigzag "W" or "M" motion until the tea is frothy, then top with more hot water or steamed milk.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
*/