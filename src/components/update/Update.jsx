import React, { useState, useContext } from 'react';
import './update.scss';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Update = ({ setOpenUpdate, user }) => {
  const { login, currentUser } = useContext(AuthContext);
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [text, setText] = useState({
    name: user.name,
    city: user.city,
    website: user.website,
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData, { withCredentials: true });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient('');
  const mutation = useMutation({
    mutationFn: async (user) => {
      console.log(user);
      const response = await makeRequest.put('/users', user);
      login({ ...user, id: currentUser.id });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
    onError: (error) => {
      console.error('Error creating post:', error);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      let prefix = '/upload/';
      let coverUrl = user.coverPic;
      let profileUrl = user.profilePic;

      coverUrl = cover ? prefix + (await upload(cover)) : user.coverPic;
      profileUrl = profile ? prefix + (await upload(profile)) : user.profilePic;

      mutation.mutate({ ...text, coverPic: coverUrl, profilePic: profileUrl });

      setOpenUpdate(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='update'>
      <form action='' className='form'>
        <div className='pics'>
          <div className='cover'>
            <input type='file' name='' id='coverPic' style={{ display: 'none' }} onChange={(e) => setCover(e.target.files[0])} />
            {cover ? <img className='selectedImage' src={URL.createObjectURL(cover)} alt='Cover' /> : ''}
            <label htmlFor='coverPic'>
              <span>Update Cover Picture</span>
            </label>
          </div>

          <div className='profile'>
            <input type='file' name='' id='profilePic' style={{ display: 'none' }} onChange={(e) => setProfile(e.target.files[0])} />
            {profile ? <img className='selectedImage' src={URL.createObjectURL(profile)} alt='Profile' /> : ''}
            <label htmlFor='profilePic'>
              <span>Update Profile Picture</span>
            </label>
          </div>
        </div>

        <div className='fitem'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' value={text.name} onChange={handleChange} id='name' />
        </div>
        <div className='fitem'>
          <label htmlFor='city'>City:</label>
          <input type='text' name='city' value={text.city} onChange={handleChange} id='city' />
        </div>
        <div className='fitem'>
          <label htmlFor='website'>Website:</label>
          <input type='text' name='website' value={text.website} onChange={handleChange} id='website' />
        </div>
        <div className='fitem'>
          <button onClick={handleClick}>Update</button>
        </div>
      </form>
      <button className='closeBtn' onClick={() => setOpenUpdate(false)}>
        x
      </button>
    </div>
  );
};

export default Update;
