import axios from 'axios';

const KEY = 'AIzaSyDwVenZet5dGgVXRVSYkMJrMvxac0GiYn4';

export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',
  params:{
    part : 'snippet',
    type : 'video',
    maxResults : 5,
    key : KEY,
  }
});