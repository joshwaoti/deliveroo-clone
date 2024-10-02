import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-2'>
          <StarIcon color={green} opacity={0.5} size={22} />
          <Text className='text-sm text-gray-500'>
            <Text className='text-green-500'>
              {rating} . {genre}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
