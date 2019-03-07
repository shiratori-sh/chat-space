## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, index: true, foreign_key: true|
|group_id|references|null: false, index: true, foreign_key: true|

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
|name|string|null: false|
|email|string|null: false, unique: true|

### Association
- has_many :messeges
- has_many :groups, through: :members
- has_many :members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|

### Association
- has_many :messeges
- has_many :users, through: :members
- has_many :members
- accepts_nested_attributes_for :members
