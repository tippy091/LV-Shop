package org.devlearn.lvshopserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.devlearn.lvshopserver.entities.Address;
import org.devlearn.lvshopserver.entities.OrderStatus;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetails {

    private UUID id;
    private Date orderDate;
    private Address address;
    private Double totalAmount;
    private OrderStatus orderStatus;
    private String shipmentNumber;
    private Date expectedDeliveryDate;
    private List<OrderItemDetail> orderItemList;

}
