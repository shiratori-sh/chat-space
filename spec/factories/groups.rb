FactoryBot.define do
  factory :group do
    group_name {Faker::Team.name}
  end
end

# カラム名（キー）は左側。Fakerを利用していない部分は実際のカラム名を入力。
