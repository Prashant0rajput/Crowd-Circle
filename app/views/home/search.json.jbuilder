json.users do 
	json.array!(@users) do |user|
        json.name user.name
        json.url "/profile/"+ (user.id).to_s
	end
end