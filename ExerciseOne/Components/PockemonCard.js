import { View,Text ,StyleSheet,Platform,Image} from "react-native";

const gettype =(type)=>{
    switch(type.toLowerCase())
    {
        case "electric":
            return {borderColor:"#FFB700"};
        case "water":
            return {borderColor:"#6493EA"};
        case "fire":
            return {borderColor:"#FF5733"};
        case "grass":
            return {borderColor:"#66CC66"};
        default:
            return {borderColor:"#ADABA0"};

    }
}

export default function PockemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weakness 

})
{
    const {borderColor}=gettype(type);
    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Name: {name}</Text>
                <Text style={styles.hp}>HP: {hp}</Text>
            </View>
            
            <Image source={image}  style={styles.image} accessibilityLabel={'${name} Pokemon'} resizeMode="contain"/>
            <View style={styles.typeContainer}>
                <View style={[styles.badge,{borderColor}]}>
                <Text style={styles.type}>Type: {type}</Text>
                </View>
            </View> 
            <View style={styles.moveContainer}>
                <Text style={styles.moves}>Moves: [{moves.join(",")}]</Text>
            </View>
            <View style={styles.weaknessContainer}>
                <Text style={styles.weakness}>Weakness: [{weakness.join(",")}]</Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    card:
    {
        borderRadius:20,
        backgroundColor:"white",
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{
                shadowOffset:{width:2,height:2},
                shadowColor:"#333",
                shadowOpacity:0.3,
                shadowRadius:4,
            },
            android:{
                elevation:5,
            }
        })
    },
    nameContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:28,
    },
    name:{
        fontSize:24,
        fontWeight:"bold",
    },
    hp:{
        fontSize:20,
    },
    image: {
        width:"100%",
        height:200,
        marginBottom:16,
    },
    typeContainer:
    {
        marginBottom:28,
        alignItems:"center",
    },
    badge:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4,
    },
    type:{
        fontSize:24,
        
    },
    moveContainer:
    {
        marginBottom:20,
    },
    moves:
    {
        fontSize:22,
        fontWeight:"bold",
    },
    weaknessContainer:{
        marginBottom:20,
    },

    weakness:{
        fontSize:22,
        fontWeight:"bold",
    },

})