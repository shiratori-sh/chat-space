## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references| foreign_key: true|
|group_id|references| foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messegesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, index: true, foreign_key: true|
|group_id|integer|null: false, index: true, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :messeges
- has_many :groups, through: :group_users
- has_many :group_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|

### Association
- has_many :messeges
- has_many :users, through: :group_users
- has_many :group_users
- accepts_nested_attributes_for :group_users
