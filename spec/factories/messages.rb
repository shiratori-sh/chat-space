FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/iii.png")}
    user
    group
  end
end

# Fakerを利用していないものは実際のファイルやディレクトリを指定する。
