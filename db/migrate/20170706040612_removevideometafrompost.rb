class Removevideometafrompost < ActiveRecord::Migration
  def change
  	   remove_column :posts, :video_meta, :string
  end
end
