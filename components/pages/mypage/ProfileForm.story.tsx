import { ProfileForm } from './ProfileForm';

export default {
  title: 'ProfileForm',
};

export const Usage = () => (
  <ProfileForm
    onSubmit={() => console.log('hoge')}
    defaultValues={{ name: 'a', hobbies: [{ value: 'kinu' }, { value: 'neko' }] }}
  />
);
