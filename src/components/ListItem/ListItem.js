import PropTypes from 'prop-types';
import { Item, Status, Name } from 'components/FriendList/FriendList.styled';

export const ListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

ListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}