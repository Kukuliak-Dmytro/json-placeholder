import './UserCard.css';

export default function UserCard({ item }) {
    const user = item;
  if (!user) return null;
  return (
    <div className="user-card">
      <h2 className="user-card-name">{user.name}</h2>
      <p className="user-card-username">@{user.username}</p>
      <p className="user-card-email">Email: {user.email}</p>
      <div className="user-card-address">
        <strong>Address:</strong>
        <span>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</span>
        <span>Geo: {user.address.geo.lat}, {user.address.geo.lng}</span>
      </div>
      <p className="user-card-phone">Phone: {user.phone}</p>
      <p className="user-card-website">Website: <a href={`http://${user.website}`}rel="noopener noreferrer">{user.website}</a></p>
      <div className="user-card-company">
        <strong>Company:</strong>
        <span>{user.company.name}</span>
        <span className="user-card-catchphrase">"{user.company.catchPhrase}"</span>
        <span>{user.company.bs}</span>
      </div>
    </div>
  );
}
